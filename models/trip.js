module.exports = function(sequelize, DataTypes){
    const userTrip = sequelize.define("usertrip",{

        user_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        user_priviledge:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        budget_total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
        },
        shared_category_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        shared_category_2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        shared_category_3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        shared_category_4: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        shared_category_5: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        shared_category_6: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },



    });
    return userTrip;
};