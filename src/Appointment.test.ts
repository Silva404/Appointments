import { Appointment, AppointmentProps } from "./Appointment";
import { test, describe } from "node:test";
import { ok, throws } from "node:assert";
import { AppointmentInFuture } from "./Expections/AppointmentInFuture";
import { TitleIsShort } from "./Expections/TitleIsShort";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";
import { Consultant } from "./Consultant";
import { TitleHasNumbers } from "./Expections/TitleHasNumbers";
import { TooFewExperts } from "./Expections/TooFewExperts";
import { User } from "./User";
import { Name } from "./Name";

function createSut(props?: Partial<AppointmentProps>): Appointment {
  return Appointment.create({
    date: props?.date ?? new Date(),
    title: props?.title ?? "title",
    consultants: props?.consultants ?? [
      Consultant.create("consultant firstName", "consultant lastName"),
    ],
    user: new User(new Name("user first name", "user last name")),
  });
}

describe("Appointment", { concurrency: true }, () => {
  test("should create an appointment", () => {
    ok(createSut());
  });

  test("should fail if appointment is schedule in a year from now", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    throws(
      () => createSut({ date }),
      new AppointmentInFuture(date.toDateString()),
    );
  });

  test("should fail if title is empty", () => {
    const title = "";
    throws(() => createSut({ title }), new TitleIsEmpty(title));
  });

  test("should fail if title is short", () => {
    const title = "ti";
    throws(() => createSut({ title }), new TitleIsShort(title));
  });

  test("should fail if title contains numbers", () => {
    const title = "title23";
    throws(() => createSut({ title }), new TitleHasNumbers(title));
  });

  test("should fail if appointment dont have an expert", () => {
    throws(() => createSut({ consultants: [] }), new TooFewExperts());
  });

  test("should check if appointment is upcoming", () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() * 2);
    const apppointment = createSut({ date });

    ok(apppointment.date.isUpcoming());
    ok(!apppointment.date.isPrevious());
  });

  test("should check if appointment is previous", () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const apppointment = createSut({ date });

    ok(apppointment.date.isPrevious());
    ok(!apppointment.date.isUpcoming());
  });
});
