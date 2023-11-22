import { Appointment } from "./Appointment";
import { test } from "node:test";
import { ok, throws } from "node:assert";

test("should create an appointment", () => {
  const date = new Date();
  const appointment = Appointment.create(date);
  ok(appointment);
});
