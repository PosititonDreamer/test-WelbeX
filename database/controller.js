const db = require('./pool')

class Controller {
    async createRoute(req, res) {
        const {date, name,count , distance} = req.body
        const newRoute = await db.query('INSERT INTO routes (date, name, count, distance) values ($1, $2, $3, $4)')
        res.json(newRoute.rows[0])
    }
    async getRoutes(req,res) {
        const routes = await db.query("SELECT to_char(date, 'dd.mm.YYYY') as date, name, count, distance, id from routes")
        res.json(routes.rows)
    }
    async getOneRoutes(req,res) {
        const id = req.params.id
        const routes = await db.query('SELECT * FROM routes where id = $i')
        res.json(routes.rows)
    }
    async updateRoute(req, res) {
        const {id, date, name, count, distance} = req.body
        const route = await db.query('UPDATE routes set date = $1, name = $2, count = $3, distance = $4 where id = $5 ')
        res.json(route.rows[0])
    }
    async deleteRoute(req,res) {
        const id = req.params.id
        const route = await db.query('DELETE FROM routes where id = $1')
        res.json(route.rows[0])
    }
}
module.exports = new Controller()