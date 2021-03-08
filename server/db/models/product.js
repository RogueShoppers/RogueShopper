const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define(
  'product',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    shortDescription: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    longDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0.99
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    imageURL: {
      type: Sequelize.TEXT,
      defaultValue:
        'https://fishsubsidy.org/wp-content/uploads/2020/01/dog-begging3.jpg'
    }
  },
  {
    classMethods: {
      getSearchVector: () => {
        return 'SearchText'
      },

      addFullTextIndex: () => {
        let searchFields = [
          'name',
          'shortDescription',
          'longDescription',
          'price',
          'quantity'
        ]
        let Search = this

        let vectorName = Search.getSearchVector()
        Sequelize.query(
          'ALTER TABLE "' +
            Search.tableName +
            '" ADD COLUMN "' +
            vectorName +
            '" TSVECTOR'
        )
          .success(() => {
            return Sequelize.query(
              'UPDATE "' +
                Search.tableName +
                '" SET "' +
                vectorName +
                "\" = to_tsvector('english', " +
                searchFields.join(" || ' ' || ") +
                ')'
            ).error(console.log)
          })
          .success(function() {
            return sequelize
              .query(
                'CREATE INDEX post_search_idx ON "' +
                  Search.tableName +
                  '" USING gin("' +
                  vectorName +
                  '");'
              )
              .error(console.log)
          })
          .success(function() {
            return sequelize
              .query(
                'CREATE TRIGGER post_vector_update BEFORE INSERT OR UPDATE ON "' +
                  Search.tableName +
                  '" FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger("' +
                  vectorName +
                  "\", 'pg_catalog.english', " +
                  searchFields.join(', ') +
                  ')'
              )
              .error(console.log)
          })
          .error(console.log)
      },
      search: function(query) {
        let Search = this

        query = Sequelize.getQueryInterface().escape(query)
        console.log(query)

        return Sequelize.query(
          'SELECT * FROM "' +
            Search.tableName +
            '" WHERE "' +
            Search.getSearchVector() +
            "\" @@ plainto_tsquery('english', " +
            query +
            ')',
          Search
        )
      }
    }
  }
)

module.exports = Product
