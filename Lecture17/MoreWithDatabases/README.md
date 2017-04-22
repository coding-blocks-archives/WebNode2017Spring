

### Installed dependencies

```shell
npm install --save express body-parser hbs mysql sequelize
```

### Setup database

Enter database
```shell
mysql -u root -p
```

Make db and grant user access
```sql
create database shoppingcart;
create user shopper identified by 'shoppass';
use shoppingcart;
grant all privileges on shoppingcart.* to shopper;
```