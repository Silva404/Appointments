import { Appointment, AppointmentProps } from "./Appointment";
import { test, describe } from "node:test";
import { ok, throws } from "node:assert";
import { AppointmentInFuture } from "./Expections/AppointmentInFuture";
import { TitleIsShort } from "./Expections/TitleIsShort";
import { TitleIsEmpty } from "./Expections/TitleIsEmpty";
import { Expert } from "./Expert";
import { TitleHasNumbers } from "./Expections/TitleHasNumbers";

function createSut(props?: Partial<AppointmentProps>): Appointment {
  return Appointment.create(
    props?.date ?? new Date(),
    props?.title ?? "title",
    props?.experts ?? [Expert.create("firstName", "lastName")],
  );
}

describe("Appointment", () => {
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
});
