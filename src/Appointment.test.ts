import { Appointment } from "./Appointment";
import { test } from "node:test";
import { ok, throws } from "node:assert";

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
  throws(() => Appointment.create(date, title));
});

test("should fail if title is empty", () => {
  const date = new Date();
  const title = "";
  throws(() => Appointment.create(date, title));
});
