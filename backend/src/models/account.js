module.exports = (sequelize, DataTypes) =>{

    const Account = sequelize.define('Account', {
        email : {
            type: DataTypes.STRING, //tipo do dado que vai vir do DateTypes
            allowNull : false, //não pode ser nulo
        },
        password : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        jwtVersion : { // gerenciador de versão do refreshToken
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    });

    Account.associate = (models) => {
        Account.hasMany(models.Link, {foreignKey: 'accountId'});
    };

    Account.prototype.toJSON = function () {
        const values = {...this.get()};
        delete values.password;
        return values;
    };//essa function é para não retornar o password, apenas registrar no banco

    return Account;
};