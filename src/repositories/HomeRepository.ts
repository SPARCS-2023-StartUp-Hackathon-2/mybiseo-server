import { InsertResult, Repository } from "typeorm";
import { MysqlDataSource } from "../database";
import { Service } from "typedi";
import { Schedule } from "../entities/Schedule";

@Service()
export class HomeRepository extends Repository<Schedule> {
  public async getSchedule(body: any) {
    return MysqlDataSource.createQueryBuilder(Schedule, "schedule")
      .select(["schedule.date", "schedule.content"])
      .where("schedule.id = :id", { id: body.id })
      .andWhere("schedule.date = :date", { date: body.date })
      .getOne();
  }

  public async createSchedule(body: any) {
    return MysqlDataSource.createQueryBuilder(Schedule, "schedule")
      .insert()
      .into(Schedule)
      .values({
        userId: body.userId,
        date: body.date,
        content: body.content,
      })
      .execute();
  }
}
