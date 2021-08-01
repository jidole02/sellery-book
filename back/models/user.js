const Seq = require("sequelize");

module.exports = class User extends Seq.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Seq.STRING(40),
          allowNull: true,
          unique: true,
        },
        nickname: {
          type: Seq.STRING(15),
          allowNull: false,
        },
        password: {
          type: Seq.STRING(100),
          allowNull: true,
        },
        provider: {
          type: Seq.STRING(10),
          allowNull: false,
          defaultValue: "local",
        },
        snsId: {
          type: Seq.STRING(30),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignKey: "followingId",
      as: "Followers",
      through: "Follow",
    });
    db.User.belongsToMany(db.User, {
      foreignKey: "followerId",
      as: "Followings",
      through: "Follow",
    });
  }
};
