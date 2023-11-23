import { Appointment } from "./Appointment";
import { test, describe } from "node:test";
import { ok, throws } from "node:assert";
import { AppointmentInFuture } from "./Expections/AppointmentInFuture";
import { TitleIsShort } from "./Expections/TitleIsShort";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";

describe("Appointment", () => {
  test("should create an appointment", () => {
    const date = new Date();
    const title = "title";
    const appointment = Appointment.create(date, title);
    ok(appointment);
  });

  test("should fail if appointment is schedule in a year from now", () => {
    const date = new Date();
    const title = "title";
    date.setFullYear(date.getFullYear() + 1);
    throws(
      () => Appointment.create(date, title),
      new AppointmentInFuture(date.toDateString()),
    );
  });

  test("should fail if title is empty", () => {
    const date = new Date();
    const title = "";
    throws(() => Appointment.create(date, title), new TitleIsEmpty(title));
  });

  test("should fail if title is short", () => {
    const date = new Date();
    const title = "ti";
    throws(() => Appointment.create(date, title), new TitleIsShort(title));
  });

  test("should fail if title contains numbers", () => {
    const date = new Date();
    const title = "title23";
    throws(() => Appointment.create(date, title));
  });
});
