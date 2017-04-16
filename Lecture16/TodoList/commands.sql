// As Root
create database mytododb;

create user todolistuser identified by 'todopassword';

use mytododb;

grant all on mytododb.* to 'todolistuser';

// As todolistuser

use mytododb;
create table todos (id INTEGER PRIMARY KEY, task TEXT);
