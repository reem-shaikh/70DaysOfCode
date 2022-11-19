#### ADVANCED DATABASE MANAGEMENT SYSTEM 
![](1.JPG)
This course is designed to cover the fundamentals of Advanced Database Management System (ADBMS). It guides you to move from real-world problems to the database good design and optimised implementation. It defines the SQL capabilities in the information search process. It provides the understanding of query optimisation, execution, concurrency control, transaction processing and deadlocks. It gives you a broad idea of different types of databases such as OODBMS, distributed databases, ORDBMS, XML database management system, active database, temporal database and video database management system.

> syllabus contents
![](2.JPG)
![](3.JPG)
![](444.JPG)

### File System VS DBMS?
- before DBMS file system was used to access the data. File-based systems typically use storage devices such as a CD-ROM or hard disk to store and organize computer files and the data within with the goal of facilitating easy access.

A traditional file system is inexpensive, ideal for a small system with smaller quantity of parts, very low design efforts, isolated data, and has a simple backup system, but is not secure, has a lack of flexibility and many limitations, and has integrity flaws.
```bash
FILE SYSTEM IS HANDLED BY OS 

Creating drives and storing data in folders in herierchal form is an implementation of file system, it works when plenty of end users from differentt locations aint trying to access it
```
- However if we want a system in which we have many end users accessing data then its not possible to access it via file system on the server. This brings the concept of concurrency if 100 users try to access db at the same time, in case of file system it causes problems. in DBMS concurrent protocols exist which allow multiple users to access the database at the same time. 

- if your searching for a specific 1kb of data belonging to a table from a file system it would retrieve and send the entire 25gb data table instead, unnecesary data reaches the end user which is not efficient. In case of dbms search becomes faster and memory utlisation becomes efficient.

- Moreover DBMS also provides role-based access control which provides different priveledges to different users by providing different login portals for each section.

- DBMS conttains many constraints which ensures that data redundancy is avoided and only unique data is stored.

### STORAGE SOLUTIONS 
The world of big data is getting bigger every day. 

As the volume of data increases exponentially, businesses of all sizes try to capture raw data, process it, and extract insights for competitive decision-making. 

The two main architectures for storage solutions are databases(SQL/ noSQL) and data warehouses. 

Database records data through OLTP process (online transaction process - when a transaction is completed its recorded in DB). 

While databases are designed for transctions, data warehouse is used for analytics and reporting. we could also use database for analytical processing but its extremely slow when it comes to querying large amounts of data, and it could further also slow down the transactional processes.

When we want to perform analytical study on a certain set of data the data is loaded from database to data warehouse via the ETL process. 
```bash
ETL tools enable data integration strategies by allowing companies to gather data from multiple data sources and consolidate it into a single, centralized location through the ETL process:
- EXTRACT data from its original source
- TRANSFORM data by deduplicating it, combining it, and ensuring quality, to then
- LOAD data into the target database
```
The data that is loaded into the data warehouse is very specific to the analysis were performing. for example, if we want to perform an analysis on who exeeded their sale mark within the first year of joining it would only load data relevant to the name and the sales each employee made. 
Data warehousing is used for analytical processing (OLAP - onine analytical process - used to analyze huge amount of data). it processes data extremely fast.

So technically,
Organizations that want to analyze their applications' current and historical data may choose to complement their databases with a data warehouse

Data warehouse cannot be implemented without a database. A data warehouse exists as a layer on top of another database or databases (usually OLTP databases).

data warehouses prioritize SQL databases and are generally incompatible with NoSQL databases.

### Why DBMS?
> structured data - stored in relations 
![](e1.JPG)
- ecommerce 
```bash
some e-commerce sellers use a relational database design centered around the following tables: products table, customers table, and orders table.  if you need to list items from a specific category, there must be a database which contains the information about the products and categories.

However some use noSQL because it fits their requirement better 
```
- withdrawing money from ATM
- hospital management system 
- school management system 
![](u1.JPG)
- airline management system  

> unstructured data - not stored in relations / tables 
In the modern world of big data, unstructured data is the most abundant. It’s so prolific because unstructured data could be anything: media, imaging, audio, sensor data, text data, and much more. Unstructured simply means that it is datasets (typical large collections of files) that aren’t stored in a structured database format.
- data that doesn’t live in a relational database management system (RDBMS). 
- Unstructured data just happens to be in greater abundance than structured data is.
- Until the advent of object-based storage, most, if not all, of this unstructured data was stored in file-based systems.

**NoSQL databases that better handle unstructured or semi-structured data such as JSON and XML files, that do not easily comply with the relational tabular schema.**

> Examples of unstructured data are:
- Rich media. Media and entertainment data, surveillance data, geo-spatial data, audio, weather data
- Internet of Things (IoT). Sensor data, ticker data
- Analytics. Machine learning, artificial intelligence (AI)

> applications;
-  most big data sources, including Facebook, WhatsApp, twitter etc., have unstructured data.

##### noSQL vs SQL which is better?
![](gee.JPG)
Organizations that support data-intensive applications must make many decisions about how to best implement and maintain them. One of the biggest decisions is to determine the best platforms to use for storing and delivering the application data. In the past, most organizations opted for SQL databases because of their ability to protect data and ensure its integrity. But the rise of the internet and cloud technologies—and the proliferation of data that went with them—has caused many organizations to turn to NoSQL databases, in large part because they can better handle the abundance of unstructured and semi-structured data.
![](dif1.JPG)

#### Unit 1
### What is the difference data and information?
![](4.JPG)
Raw facts and figures which does not have any specific meaning. it can be defined as a representation of facts which can be processed by human or electronic machine.
> Eg: 34, 45

When we say numbers specify the age of a student its called information. Information is organized and classified data. Its the extracted form of data. 

> Eg2: Records of all students (age, name, address) of a university (which includes students of all courses) is data. If we want to extract student data from a particular course then were saying were extracting information, because were extracting a classified data.

When were able to find out certain patterns through the information its called knowledge 
![](kkk1.JPG)
```bash
Data when processed becomes information and informattion when processed becomes knowledge 
```
### What is database?
- Collection of similar / interralated data 
![](5.JPG)
- small databases are stored on file systems 
- large databases are stored on cloud storage or computer clusters.

> Database contains of data, constraints on the data , relationship between data, schema `

----------
> What is cloud storage / utility storage?
- eliminates the need to purchase and manage your own data storage infrastructure by providing a **virtual storage infrastructure** which can be **scaled** to the applications requirment.
- Cloud storage is a cloud computing model that allows users to **save important data or media files** such as documents, photos, videos and other forms of media on remote, t**third-party servers**. 
-  cloud storage is maintained and operated by a **cloud-based service provider**.
-  To ensure the **constant availability of data**, cloud storage systems involve large numbers of data servers. Therefore, if a server requires maintenance or fails, the user can be assured that the data has been moved elsewhere to ensure availability.
-  Cloud services have made it possible for anyone to store digital data and access it from anywhere. This means that cloud storage is essentially a **virtual hard drive**.

> What are types of cloud storage / Deployment cloud?
1. Private cloud storage
- a private cloud storage is set up for the company itself
where cloud data is stored on company's intranet which is protected by company's firewall, its set up by the host company like AWS,  MICROSOFTS'S AZURE, GOOGLE CLOUD 
- its **deployed locally**
- ensures data privacy 
- costly maintainence 
- more customizable 

2. Public cloud storage 
- its **publically available cloud storage** it doesnt belong to a specific organisation / institute.
- its **deployed globally** which is why security and privacy is reduced. 
- its cost efficient 
- **cannot customize the application** as much as we can in private cloud.

3. Hybrid Cloud 
- combination of private and public cloud
- cost efficient and customisable like public cloud 
- data stored on private cloud 
- security like private cloud 

> Cloud Based Services / Cloud Infra services - Delivery Model
These services make software available to users over the internet, usually for a monthly subscription fee.
![](6.JPG)

- Software as a Service (SaaS).
```bash
In order to create a particular resource say an application / website we can hire a third party vendor (SaaS) to create it for us 
```
- Platform as a Service (PaaS).
```bash
If you know how to create the application but dont have the resources like OS, compiler (runtime), infra this can be rented from PaaS
```
- Infrastructure as a Service (IaaS).
```bash
created the webite and you have the primary resources to run it but you dont have the resources (infra) to host it 

Cloud infrastructure refers to the hardware and software components, such as servers, storage, networking, virtualization software, services and management tools, that support the computing requirements of a cloud computing model.
```
-----------
#### What is database Management System?
![](7.JPG)
Used for creating and maintaining databases.
- Defining the database contents by specifying data types, data structures and constraints for data that is going to be stored in the database 
- Constructing the database i.e adding data on DB table 
- Manipulating the database with CRUD commands 
- Sharing a database
When a person in a rail db website buys a ticket concurrently it will update the values on another person viewing the system. 

> Difference between data type and data structure?
A Data type is one of the forms of a variable to which the value can be assigned of a given type only (char, int, varchar).

Data structure is a collection of different data types. It is a way of organizing the data in memory. The various operations that can be performed on a data structure are insertion, deletion, and traversal.

![](10.png)
Technically primitive data structures are only identified in C and C++, When asked what are the different types of data structures

Basically, data structures are divided into two categories:
> Linear data structure: Array, Stack, Queue, LL
- The data items are arranged in sequential order, one after the other. 
- It can be traversed on a single run. That is, if we start from the first element, we can traverse all the elements sequentially in a single pass.
> Non-linear data structure: Tree, Graph, Hash table, Trie 
- The data items are arranged in non-sequential order (hierarchical manner).
- It requires multiple runs. That is, if we start from the first element it might not be possible to traverse all the elements in a single pass.

**DBMS enables to capture, store, maintain, change, convert and present data in many different forms and formats**
![](m11.JPG)

#### What is the significance of database?
![](8.JPG)
- reduces redundancy - 2 roll no's of the same value cannot exist. Through applying unique constraints for a column name we can prevent redundant values in the same column.
- security can be imposed - we can create seperate logins for admin, student, faculty etc
- provides permission for multiple user interface - many users can view the db concurrently 
- maintains integrity - ensures datas integrity such that whenever a change is made in a table of a databse it will simultanousely show change for all tables linked with that table
- Backup and recovery - we can easily take backup and can recover database 
- provide constant storage for objects of database 
- development time decrease due to dbms 

#### Role of a Database ADMIN
incharge of the entire activities of the DBMS.
![](MKL.JPG)
Database administrators ensure databases run efficiently. Database administrators and architects create or organize systems to store and secure a variety of data by ensuring that data is availble to the authorized user they ensure this by giving respective username and password priviledges to different levels of department in the organisation. 
```bash
for example, teachers have a different login portal and students have a different one, while the teachers can mark the students grades, the students have the priveledge to only view the changes made by the teacher
```
## Types of Database architecture 
There are mainly three types of DBMS architecture: One Tier Architecture (Single Tier Architecture) Two Tier Architecture. Three Tier Architecture.

#### Types of Databases 
![](d1.JPG)

## Database Environment 
The database system environment is comprised of the components that are meant for defining and managing the data that we collect, store, manage and use in the database environment.
![](gg.JPG)

### Database ArchtecTure 
A Database Architecture is a representation of DBMS design. It helps to design, develop, implement, and maintain the database management system. A DBMS architecture allows dividing the database system into individual components that can be independently modified, changed, replaced, and altered.

#### 1. 1-TIER DATABASE ARCHITECTURE 
1 Tier Architecture in DBMS is the simplest architecture of Database in which the client, server, and Database all reside on the same machine.
- Personal database - used for an individual user, which can be used for CRUD operations. only a single user can access the database. Hence, the user can use all the resources at all times. All these systems are used for personal usage, such as personal computer experience

> example 
In order to learn the Structure Query Language (SQL), we set up our SQL server and the database on our local system. This SQL server enables us to directly interact with the relational database and execute certain operations without requiring any network connection. This whole setup to learn SQL queries is an example of Single-Tier DBMS architecture.

#### 2. 2-TIER DATABASE ARCHITECTURE
![](2tier.JPG)
```bash
client has an interface which connects with the database, this interface is an API, for example, JDBC is required to connect JAVA to SQL 
#CLIENT LAYER / PRESENTATION LAYER
  ^
  |
  v
DATABASE SERVER - QUERY PROCESSING (process query made by the client) + PROVIDES DATA #this can cause a lot of load on the server 
#DATA LAYER 
```
- Two-tier database - used in client-server arhictecture where data is stored on the database server. The servers of application layer and database layer are together on the same layer which interact with the client / end user 
```bash
the client is on the first tier. data is stored on the server ie second tier.
```
![](SS4.JPG)

> PROS:
- Multiple users can use it at the same time. Hence, it can be used in an organization.
- Because of the two independent layers, it's easier to maintain.

> CONS: 
- problems with scalability when number of users is huge and they access any amount of data anytime
- security issues because client is interacting with the database directly which can create a problem.

> Example 
 In a two-tier structure, the server provides the database functionality and it allows the clients to perform operations on the database through a direct internet connection via APIs (Application Programming Interface), for example: JDBC: Java Database Connectivity.

 Consider a situation where you went to a bank to withdraw some cash. After entering the withdrawal amount and the account details on the withdrawal slip, the banker will go through the server-side database via his credential (API call) and will check whether there is enough balance present or not. 

#### 3. 3-TIER DATABASE ARCHITECTURE
![](p11.JPG)
```bash
#CLIENT LAYER / PRESENTATION LAYER
CLIENT APPLICATION #users uses this client machine which runs this interface to connect with the database where data is present to end user in GUI form but it reaches the business layer in the form of HLL
  ^
  |
  v
#BUSINESS LAYER / APPLICATION LAYER / WEB SERVER LAYER 
- QUERY PROCESSING 
Query written by the client/user is processed in the business layer 
- query converted to LLL/ machine language 
  ^
  |
  v
#DATA LAYER 
- GIVES DATA FROM THE DATABASE based on the query recieved 
```
multitier database / three-tier database - The server of application layer is in between the database layer and the end user which is responsible for communicating the user’s request to the DBMS system and send the response from the DBMS to the user. The application layer(business logic layer) also processes functional logic, constraint, and rules before passing data to the user or down to the DBMS.
```bash
the overall application framework is split into multiple pieces where the database server is separate from the application server
```
eg of IRCTC website, when end user makes a request to extract some value from their database records, IRCTC makes a request to their database server to provide the data to the end user but the user doesnt know where he data is stored also it provides security since there is a business layer in between client and data layer.

> CONS: system is a bit complex thats why its a bit hard to maintain.
> PROS: its secure and scalable. 

#### Difference between 2-TIER & 3-TIER Architecture models
![](SER.JPG)

## What database do big business use?
Small businesses that were dependent on Excel spreadsheets or Microsoft Access to handle their data few years ago want to add more capacity, functionality, and flexibility to there database and applications

#### 4. Enterprise database 
An enterprise database is used by enterprises and large organizations to manage their huge collection of data. Such a database helps companies improve their efficiency. An enterprise database is robust enough to successfully handle the queries of multiple users simultaneously, and is capable of handling a range of 100 to 10,000 users at a time.

- In order for company's to manage their resources they use this ERP software which manages company's data records using enterprise database.

- enterprise database are based on three tier database so ERP software is the presentation layer and data is stored on the data layer

- ERPs are built on top of relational databases, and typically feature a very extensive design: a large number of entities (e.g. products, clients, invoices, etc.), numerous screens and a high degree of configurability.

Typically DBMS of the ERP software is managed by Database administrator, or DBA, who is specialist in particular software product. DBA instructs-system to load, retrieve, or change data in database, as well as tells who can access data and what commands each one can use.
```bash
Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.

A company has different department which has its own application program, also each application has different sets of files and access priveledges. each of these applications comes under the ERP software which helps manage the database
```
![](fg.JPG)
![](mn.JPG)

> Difference between PDA and smartphone?
- Before smartphones ruled the roost, personal digital assistants (PDAs) walked the Earth which has windows like OS for mobile devices, their concept was to have a hand held mobile. Let's look back at the era of dedicated PDAs: roughly 1992 to 2007.
- PDAS started being discontinued in 2011. they have telephone facilities but couldnt connect to wireless broadband network.

#### Types of Databases 
![](d1.JPG)

#### Types of DBMS 
There are types of DBMS based on data models, user, sites, cost and purpose. 
![](aa.JPG)

### Based on Data Models 
1. Herierchal Data Model 
- Parent can have n number of children, but child can have only one parent. 
![](cc.JPG)
![](D2.JPG)

> Cons
- If you already defined a schema and you want to add more children later on, the entire process can become complicated to redefine database. 
- Programming will become difficult since we have more level 

2. Network Data Model 
- each child can have more than one parent and each parent can have more than one child 
![](ff.JPG)
![](D3.JPG)

> Pros:
- flexibility to move any child with any parent 

> Cons:
- structural reliance - we cannot rely on any parent child structure since any sort of manipulations can be done to those 

3. Relational data model 
![](llk.JPG)
![](D5.JPG)
- one row in the table is reffered to as tuples and one column in the table is reffered to as attributes 

> Pros:
- duplicate data is removed 
- we can interlink multiple tables with the concept of relation

> Cons:
- We need to scale more databases horizontally to store more data - so hardware expenses are more 

4. Object oriented Model (OODBMS) = OOPS concept + database 
![](zxc.JPG)
![](D6.JPG)

5. Object relational data model = ORDBMS + RELATIONAL DBMS
![](bnm.JPG)  

### Based on User 
![](11.JPG)
- single user - A DBMS is a single-user if at most one user at a time can use the system. Single-User DBMSs are mostly restricted to personal computer systems.
- Multi user - if more than one user can use the dbms concurrently 

### Based on No of sites 
![](asd.JPG)
> Note: every site / location where database is stored also has an allocated database server which provides data to end user.

1. centralized DBMS 
![](c1.JPG)
![](D7.JPG)
contains a single database that is stored on one location of the network and multiple systems can access it via internet connection with nodes connected through any computer netork like LAN/WAN 
![](D8.JPG)

> Cons:
If any kind of system failure occurs in the centralized system then the entire data will be destroyed.

2. parallel Network DBMS 
sometimes the client server and centralized system is not much efficient to handle huge amount of data with huge transfer rate.

![](paralel.png)
parallel DB system distributes data on different server stored parallely also to improve the performance of data processing each of this server includes multiple resources in parellel like CPU'S and disk(which stores data in defined order) to increase the data trabsfer rate. 
- It also performs many parallelization operation like data loading (performed parallely) and query processing. 

![](mk.jpg)
It improves performance of the system and it ensures distributed access of data. Lets take an example for instance, a bank has many branches in multiple cities and countries, how is their database accessed to the end user, its all possible due to parallel database system which creates an *intra communication channel* consisting of CPU + STORAGE + MEMORY. Memory is what your computer uses to store data temporarily, while storage is where you save files permanently.

3. Distributed DBMS 
![](dd.png)
A distributed database management system (DDBMS) is a centralized software system that manages a distributed database (that is a collection of interconnected databases which is spread across multiple locations via computer network) in a manner as if it were all stored in a single location.
- Homogeneous DBMS - using same software which is scattered in multiple locations from where they are accessing their resources from 
```bash
for example in the manipal student portal, lets say their are different servers for library and for coursera courses, so at the end of the day it seems to the end user as if they are using the same software but each sub-section is allocated to a different database at a different location
```
- Heterogeneous DBMS - different softwares are allocated at different locations and their is an additional software which helps in exchange of data between these locations.
![](D10.JPG)

> Difference between centralized and distributed database?
![](diff.JPG)
- Its easier to modify systems (i.e add CRUD operations) on distributed database since every interconnected database has a bunch of connected databases but thesee connectd databases are only linked to one interconnected database. so if we modify one of these interconnected db it wont affect the other interconnected database. 
- However its diffifcult to maintain integrity(consistency - data is consistent amongst all databases and can be trusted)

#### Types of DB based on cost 
![](cost.JPG)

#### Types of DB based on purpose 
![](vb.JPG)

### Database 
> DBMS is intermediate beyween app and dtaabase 
```bash
app ------ DBMS ----- database 
```
## Types of Database 
Based on the type of data: structured data / unstructured data, there are 2 kind of database type: relational/ SQL database and unstructured/ noSQL database 

> Difference between structured data and unstructured data 
IN CHAT APPLICATIONS, we send photos, links etc we use unstructured data -> noSQL -> mongoDB 

#### Relational Database 
When databases started, they started with rdbms. These companies started the rdbms concept, until now most companies use rdbms only, because shifting databases is very cost expensive, because data they contain is huge.
- IBM (ibm DB2  )
- Oracle (mongoDb, mySql, Cassandra)
```bash
#Oracle offers flexible solutions that handle both structured and unstructured data.
```
- microsoft (postgreSQL, microsoft access, SQL server)

> Types of RDBMS technology (STRUCTURED DATA)
- mySQL
- PostgreSQL 
- Oracle DB (used in legcy softwares)
- SQlite 
- microsoft access
- IBM db2
- MS SQL server 

### Difference between SQL and mySQL?
- sql is language used to talk to the database in english language 
`find all users older than 18` 
- mySQL is language used to talk to the database in machine language 
`select * from user > 18`

> Why do we need SQL? 
SQL became a standard in 1986 by ANSI (american national standard institute)
it again became a standard in 1987 by ISO (International organisation for standardization)

To store data securely, perform tons of operations, to manage the database we need SQL. Its just a language used to talk to the database. 
- To work with databases you need to learn query language 
```bash
Tropicana - Oracle
different orange juices - mongoDb, mySql, Cassandra (query languages)
orange juice - sql
```
#### Three Schema Architecture 
Data abstraction - hiding where data is stored from the end user. To acheive data abstraction 3 levels are created;
- external schema - how is data represented / viewed by the end user. 
```bash
faculty has a different view and student has a different view 
```
- conceptual schema - the relationship between all tables is mentioned in here 
```bash
blueprint of the architecture is mentioned here 
```
- physical schema - where is the exact location of the data in the database. DB ADMINS decide the fragmentation of data and where the data should be stored and how it should be stored (centralized vs distributed data storage).

## Unit2: RDBMS & SQL 
> RDBMS 
- data organized in the form of tables 
DB which is made up of tables called relations, which consists of rows called tuples and columns called attributes. 
![](rd1.JPG)

> terminologies;
![](d12.JPG)
![](d13.JPG)
![](d14.JPG)

### SQL 
![](sql1.JPG)
![](sql2.JPG)

### SQL FEATURES
![](L1.JPG)
![](L2.JPG)
![](L4.JPG)

### OPERATORS IN SQL STATEMENTS
![](po.JPG)

### SQL COMMANDS 
![](sl3.JPG)

#### DDL ( Data Definition Language )
![](s10.JPG)
![](s11.JPG)
![](sl12.JPG)
![](sl13.JPG)
![](sl14.JPG)

> Difference between `DELETE`, `DROP`, & `TRUNCATE` ?
- DELETE command it is a Data Manipulation Language Command (DML). Delete a **one or more tuples** but the structure remains. we can restore the table by using the “ROLLBACK” command
- DROP command is a Data Definition Language Command (DDL). It is used to **drop** the whole table (**all tuples + structure**)  Here we can’t restore the table by using the “ROLLBACK” command
![](d0.JPG)
- TRUNCATE is used to eliminate **all tuples** from the table, but the structure remains. 

Data Definition Language is used to define the database structure or schema. DDL is also used to specify additional properties of the data. Thus, the database system implements integrity constraints that can be tested with minimal overhead. 

> INTEGRITY CONSTRAINT 
DBMS maintains data integrity in order to avoid the wrong information in the database.
![](sl4.JPG)
- DOMAIN CONSTRAINT 
- ENTITY INTEGRITY CONSTRAINT 
- REFERENTIAL INTEGRITY CONSTRAINT 
- KEY CONSTRAINT 

#### Domain Constraint
![](sl5.JPG)
![](e112.JPG)

#### Entity integrity Constraint
![](e11.JPG)
![](sl6.JPG)

#### Referential Integrity Constraint
![](sl7.JPG)
![](sl8.JPG)
![](ref.JPG)

#### Key Constraint 
![](sl9.JPG)

> Difference between `VARCHAR` AND `VARCHAR2` ?
VARCHAR2 is the same as VARCHAR in the oracle database. The main difference is that VARCHAR is ANSI Standard and VARCHAR2 is Oracle standard. It is recommended to not use VARCHAR as Oracle may change its usage in the near future.

#### DML ( Data Manipulation Language )
![](sl15.JPG)
![](sl16.JPG)
![](sl17.JPG)
![](sl18.JPG)

DML deals with SQL commands that deals with the manipulation of data present in the database

> List of DML commands: 
- INSERT : It is used to insert data into a table.
- UPDATE: It is used to update existing data within a table.
- DELETE : It is used to delete records from a database table.

*DCL statements are grouped with DML statements.*

#### DCL ( Data Control Language )
DCL includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions, and other controls of the database system. 
![](sl19.JPG)
![](sl20.JPG)
```bash
GRANT: allow specified users to perform specified tasks. It is mostly used to restrict user access to INSERT, DELETE, SELECT, UPDATE, EXECUTE, ALTER or to provide privileges to users data.

REVOKE: cancel previously granted or denied permissions.
```
**In the Oracle database, executing a DCL command issues an implicit commit. Hence, you cannot roll back the command.** 

#### TCL ( Transaction Control Language )
![](sl21.JPG)
TCL stands for Transaction Control Languages. These commands are used for maintaining consistency of the database and for the management of transactions made by the DML commands. 

Whenever any transaction is made these transactions are temporarily happen in database.So to make the changes permanent, we use TCL commands. 

> The TCL commands are:  
- COMMIT
This command is used to save the data permanently. 
Whenever we perform any of the DML command like -INSERT, DELETE or UPDATE, these can be rollback if the data is not stored permanently. So in order to be at the safer side COMMIT command is used. 
- ROLLBACK
If due to some reasons the data inserted, deleted or updated is not correct, you can rollback the data to a particular savepoint. However you cant rollback once commit is performed.  
- SAVEPOINT
This command is used to save the data at a particular point temporarily, so that whenever needed can be rollback to that particular point. 

```bash
NAME   |   MARKS 
JACK   |   95       #Commit
ROSIE  |   70       #SAVEPOINT A
ZACK   |   76       #SAVEPOINT B 
BRUNO  |   85       #SAVEPOINT C 

#ROLLBACK TO B 
NAME   |   MARKS 
JACK   |   95       #Commit
ROSIE  |   70       #SAVEPOINT A
ZACK   |   76       #SAVEPOINT B 

#ROLLBACK TO A 
NAME   |   MARKS 
JACK   |   95       #Commit
ROSIE  |   70       #SAVEPOINT A


   --- CODE ---
INSERT into STUDENT 
VALUES ('Jack', 95);

Commit;

INSERT into STUDENT 
VALUES ('Rosie', 70);

SAVEPOINT A;

INSERT INTO STUDENT 
VALUES (‘Zack’, 76);

Savepoint B;

INSERT INTO STUDENT 
VALUES (‘Bruno’, 85);

Savepoint C;
```

![](sl22.JPG)
![](sl23.JPG)
![](sl24.JPG)

#### DQL (Data Query Language)
![](dq1.JPG)
![](dq2.JPG)

DQL statements are used to query the data contained in schema objects. The DQL Commands goal is to return a schema relation depending on the query supplied to it

### SUBQUERY / NESTED QUERY
![](dq3.JPG)
![](po1.JPG)

### QUERING MULTIPLE RELATIONS 
![](DQ4.JPG)

### AGGREGATE FUNCTIONS IN SQL 
![](DQ5.JPG)
![](DQ6.JPG)

### GROUP BY CLAUSE 
![](DQ7.JPG)

### VIEWS 
display part of the table (tuple) user is interested to view
![](DQ8.JPG)
![](po2.JPG)
![](po3.JPG)
```bash
show all the content of the dept_id = 101 from the employee table to dept_id = 101 employees
```
![](po4.JPG)
![](po5.JPG)

### EMBEDDING SQL STATEMENTS 
![](PO6.JPG)


### TRANSACTION PROCESSING 
> What is Transaction?
Its a set of operations used to perform a logical unit of work. It generally represents change in database.
![](tt.JPG)

![](DQ9.JPG)
```bash
USER --- MAIN MEMORY ------ DBMS ------- DB 
           (BUFFER)                      (server)
                                         #server data is stored on  hard disk called server hard disk       

#READ OPERATION - ACCESSING DATA FROM DB
When value is read from DB its stored in buffer before the user can access it 

#WRITE OPERATION - CHANGING DATA AT DB 
When a user writes a value to DB it does calculation and stores it  in buffer before making changes in the DB 

#why DBMS?
For a user to make changes in the DB, he needs a DBMS, in this case were using RDBMS 
```
> Difference between memory Buffer and register and cache?
- memory buffer is found on ram 
- register is in the cpu
- register only holds a piece of info, such as a computer instruction or the storage address of any particular information, etc.
- cache is inserted between cpu and ram 
- cache is used to store data that is repeatedly needed which speeds up overall performance of computer
- From a computer architecture point of view. Definely, register is the fastest. Second is the L1 cache memory
![](klj.JPG)

1. Transactions ensure integrity of data 
- if even one of the command in the transaction fails then the rollback command will be invoked and the whole transaction will fail 
![](dq11.JPG)
- if all the commands in the transaction is executed succesfully only then the transaction will be committed
![](dq12.JPG)

#### ACID properties 
In order to maintain consistency in a database, before and after the transaction, certain properties are followed. These are called ACID properties. 
![](dq10.JPG)

1. Atomicity:
By this, we mean that either the entire transaction takes place at once or doesn’t happen at all. There is no midway i.e. transactions do not occur partially. Each transaction is considered as one unit and either runs to completion or is not executed at all. It involves the following two operations. 
- Abort: If a transaction aborts, changes made to the database are not visible. 
- Commit: If a transaction commits, changes made are visible. 
  
Atomicity is also known as the ‘All or nothing rule’. 

Consider the following transaction T consisting of T1 and T2: Transfer of 100 from account X to account Y.  
![](t1.JPG)
If the transaction fails after completion of T1 but before completion of T2.( say, after write(X) but before write(Y)), then the amount has been deducted from X but not added to Y. This results in an inconsistent database state. Therefore, the transaction must be executed in its entirety in order to ensure the correctness of the database state. 
Inconsistency occurs in case T1 completes but T2 fails. As a result, T is incomplete. 

2. Consistency
This means that integrity constraints must be maintained so that the database is consistent before and after the transaction. It refers to the correctness of a database. Referring to the example above, 
The total amount before and after the transaction must be maintained. 
Total before T occurs = 500 + 200 = 700. 
Total after T occurs = 400 + 300 = 700. 
Therefore, the database is consistent. Inconsistency occurs in case T1 completes but T2 fails. As a result, T is incomplete. 

3. Isolation:
This property ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state. Transactions occur independently without interference

4. Durability: 
This property ensures that once the transaction has completed execution, the updates and modifications to the database are stored in and written to disk and they persist even if a system failure occurs

### Relational Algebra
![](rr1.JPG)
```bash
#TYPES OF LANGUAGES: 
PROCEDURAL VS NON PROCEDURAL LANGUAGES 

Procedural languages are used for application and system programming. In procedural languages, the program code is written as a sequence of instructions. User has to specify “what to do” and also “how to do” (step by step procedure)
An example of procedural languages is C, ADA, Pascal, C++, etc.

Non-Procedural languages are used in RDBMS, expert systems, natural language processing, and education.In the non-procedural languages, the user has to specify only “what to do” and not “how to do”. It is also known as an applicative or functional language.
An example of non-procedural languages is Prolog, USP, SQL Scheme, etc.

#Howevr in SQL there is Query language which is used to retrieve information from a database.
Query language is divided into two types as follows −

1. Procedural language
Information is retrieved from the database by specifying the sequence of operations to be performed.

For Example: Relational algebra

Structure Query language (SQL) is based on relational algebra.

2. Non-procedural language
Information is retrieved from the database without specifying the sequence of operation to be performed. Users only specify what information is to be retrieved.

For Example: Relational Calculus

Query by Example (QBE) is based on Relational calculus

Relational calculus is a non-procedural query language in which information is retrieved from the database without specifying sequence of operation to be performed.

Relational calculus is of two types which are as follows −
- Tuple calculus
- Domain calculus
```
#### SELECT operation
![](rr2.JPG)

#### PROJECT operation 
![](rr3.JPG)

#### UNION operation
![](rr4.JPG)

#### INTERSECTION operation
![](rr5.JPG)

#### SET DIFFERENCE 
![](rr6.JPG)

#### CARTESIAN PRODUCT 
![](rr7.JPG)

#### RENAME operation 
![](rr8.JPG)

#### JOIN operation
![](rr9.JPG)
![](rr10.JPG)
![](rr12.JPG)
![](rr11.JPG)
![](rr13.JPG)
![](rr14.JPG)
![](rr15.JPG)
![](rr17.JPG)

### Difference between relational algebra and SQL 
![](rr16.JPG)

#### Keys in RDBMS
There are 5 keys in RDBMS:
![](n2.JPG)

##### 1. PRIMARY KEY 
 table can have many keys but by convention only one key per table is designated a "primary" one.
![](n3.JPG)

##### 2. FOREIGN KEY**
Note: the right table name is called Department 

Foreign key is used to link two tabls in the database through its primary key 
![](n4.JPG)

##### 3. CANDIDATE KEY 
They have the potential to uniquely identify a row, they have the capability of becoming primary key, but their candidate key.
![](n5.JPG)

There can be multiple Super keys and Candidate keys in a table, but there can be only one Primary key in a table.

##### 4. SUPER KEY 
its possible to have a couple employees having the same name, but not possible to have the same ID. its a combination of id and name (two other keys) - which is called a super key which allows to uniquely identify a record in the database. 
![](n6.JPG)

*total number of super keys possible = 128.*

##### 5. COMPOSITE KEY / CONCATENATED KEY 
![](n7.JPG)

## UNIT 3:
![](unit3.JPG)

### Normalization
Data Normalization is a technique that helps in designing the schema of the databsase in an optimal manner such that it reduces redundancy (2 values which exist with the same name) from the database which can be acheived by dividing table into smaller tables and link using relationships
![](n1.JPG)

#### Features 
![](f1.JPG)
![](f2.JPG)

### FUNCTIONAL DEPENDENCY 
it plays a vital role in helping us identify the difference between good and bad database design

- If A and B are two columns / attributes. attribute B (Name / Sal / Mgr) is fully functional dependent on attribute A (ID)
![](90.JPG)
![](n8.JPG)

- For one value of A, there is only one value of B. a determinant can have only one dependent. 
![](91.JPG)

- example of not Functional Deficiency 
![](nj.JPG)
```bash
#this is not a FD
X tends to Y is true, because for each value of X there is only one value of Y

Y tends to X is false, because for A there are 2 values associated 
X  |  Y
1  |  A
2  |  B
3  |  A
```

> What is entity?
properties of entities are called attributes / columns 

### DATA ANOMOLIES 
flaws in DB (some records are updated not all) are called anomoloies which can be removed through normalisation.
![](n9.JPG)

- Anomalies are problems that occur in poorly planned, un-normalized databases. 

##### 1. INSERTION ANAMOLY 
![](g6.JPG)
for example, consider a table employee with employee number (which is a primary key), dept number and dept name columns. say we have to insert a record / tuple `NULL - 6 - CIVIL` so there is a dept name named CIVIL but there is no employee assigned to it yet, but we cant insert this record because Employee number value is NULL and employee number attribute is a primary key
![](N10.JPG)

##### 2. DELETION ANAMOLY 
![](h4.JPG)
![](h5.JPG)
If we want to delete the employee number only from the table the entire record will be deleted, which would make us loose the department number and department name from the table

![](n11.JPG)
when we delete Sec B course group unecesarily Sonam proffesor would be deleted. i.e deleting one record is impacting another record.

##### 3. UPDATION ANAMOLY 
![](g7.JPG)
If we want to update the dept number of IT to 1, then we'll manually have to change it in 2 places, which could lead to human error (data inconsistency) if its forgotten to be changed in a place. 

![](g10.JPG)
> Note: IT is present in 2 places, this is called data redundancy / data duplicacy 

So, how would we fix data redundancy? By dividing tables into smaller parts, this is called normalization. Normalisation is a technique to remove anomolies and redundancy of the database.
![](g11.JPG)

##### INSERTION ANAMOLY FIX 
![](f4.JPG)
Now we can easily add `6 CIVIL` in the second table

##### DELETE ANAMOLY FIX 
![](F5.JPG)
![](F6.JPG)
Now we can delete a record from employee table and it would not delete the dept_number and dept_name from the department table. 

##### UPDATE ANAMOLY FIX 
![](f7.JPG)
![](f8.JPG)
If we make one change in the row of one table it would update this record in every tabled linked to it. 

### How do we fix anamolies?
Normalization which is implemented in stages called normal form.
![](m1.JPG)

##### 1. First Normal Form 
if a tuple has more than one record, then convert it to a table with different records with same names. 
![](m2.JPG)

> in this example, this table is not normalized, instead of being dependent on 1 value, it has multiple values / dependents 
![](km1.JPG)

> we split the records but this causes redundancy of records. 
![](km2.JPG)

##### 2. Second Normal Form**
![](m3.JPG)
![](m4.JPG)

- course_fee -> non-prime attribute 
- course_no  + std_no -> candidate key
- course no -> subset of candidate key (partial dependency)

> prime vs non-prime attribute?
non-prime attribute is that attribute which belongs to many records.

![](m5.JPG)

> an example 
![](km3.JPG)
![](km4.JPG)
![](km5.JPG)

##### 3. Third Normal Form
one column dependent on another column, the other column dependent on primary key
![](M6.JPG)

- NON PRIME ATTRIBUTES MUST NOT HAVE TRANSITIVE DEPENDENCY
> transitive dependency 
```bash
A dependent on B 
B dependent on C 
then we can say A dependent on C 

X (super key) -> y (prime attribute)
if Y dependent on X 
```

![](M7.JPG)

##### 4. BCNF (BOYCE CODED Normal Form)
![](M8.JPG)

##### 5. FOURTH Normal Form
![](M9.JPG)

##### 6. FIFTH Normal Form
![](M10.JPG)

### DENORMALIZATION 
convert normalized database and convert to non-normalized database to faster access the database. 
![](m11.JPG)

## Fully Functional Dependency (FFD)
![](FFD.JPG)
![](FFD2.JPG)



