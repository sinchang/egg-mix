'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data ={ title: 'Egg Mix' };
    await this.ctx.render('index.art', data);
  }

  async users() {
    const data = { title: 'users page' };
    await this.ctx.render('users.art', data);
  }
}

module.exports = HomeController;
