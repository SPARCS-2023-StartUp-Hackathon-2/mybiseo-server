import { Inject, Service } from "typedi";
import { HomeRepository } from "../repositories/HomeRepository";

@Service()
export class HomeService {
  @Inject()
  private homeRepository: HomeRepository;

  public async getSchedule(query: any) {
    const tests = await this.homeRepository.getSchedule(query);
    return tests;
  }

  // 실제로 쓸 거
  public async createSchedule(body: any) {
    const schedules = await this.homeRepository.getSchedules(7);
    console.log(schedules);

    // 이 아래 로직 작성해서 생성된 content를 createSchedule에 넘겨.
    let content = "";

    const result = await this.homeRepository.createSchedule(body, content);
    return result;
  }

  // 개발 시 필요
  public async createMockSchedule(body: any) {
    const result = await this.homeRepository.createMockSchedule(body);

    return result;
  }

  public async deleteSchedule(body: any) {
    const result = await this.homeRepository.deleteSchedule(body);

    return result;
  }
}
