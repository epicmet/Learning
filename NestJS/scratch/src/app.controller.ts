import { Controller, Get } from "@nestjs/common";

@Controller("/app")
class AppController {
  @Get("/asdf")
  getRootRout() {
    return "Hi there";
  }

  @Get("/bye")
  getByThere() {
    return "Bye there!";
  }
}

export { AppController };
