import { Appointment } from "./Appointment";
import { test } from "node:test";
import { ok, throws } from "node:assert";

test("should create an appointment", () => {
  const date = new Date();
  const appointment = Appointment.create(date);
  ok(appointment);
});

test("should fail if date is in the past", () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  throws(() => Appointment.create(date));
});
