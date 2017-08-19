export class App {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'home'],
      name: 'home',
      moduleId: PLATFORM.moduleName('./home/home'),
      title: 'Home',
      nav: true
    }])
  }
}
  