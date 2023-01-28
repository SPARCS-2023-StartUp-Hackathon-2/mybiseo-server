import { Inject, Service } from "typedi";
import { HomeRepository } from "../repositories/HomeRepository";

@Service()
export class HomeService {
  @Inject()
  private homeRepository: HomeRepository;

  public async getSchedule(body: any) {
    const tests = await this.homeRepository.getSchedule(body);
    return tests;
  }

  public async createSchedule(body: any) {
    const test = await this.homeRepository.createSchedule(body);
    return test;
  }
}
