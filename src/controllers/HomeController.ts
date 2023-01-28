import { Response } from "express";
import { Body, Get, HttpCode, JsonController, Post } from "routing-controllers";
import { Inject, Service } from "typedi";
import { HomeService } from "../services/HomeService";

@Service()
@JsonController()
export class HomeController {
  @Inject()
  private homeService: HomeService;

  @HttpCode(200)
  @Get("/schedule")
  public async getSchedule(@Body() body: any) {
    const schedule = await this.homeService.getSchedule(body);
    return schedule;
  }

  @HttpCode(200)
  @Post("/schedule")
  public async createSchedule(@Body() body: any) {
    const schedule = await this.homeService.createSchedule(body);
    return schedule;
  }
}
