import { expect, test, describe } from "vitest";
import validatePesel from "./validatePesel";

describe("validatePesel", () => {
  test("should return true for valid PESEL number", () => {
    const valids = [
      "44051401359",
      "90080517455",
      "00222900016",
      "83123112342",
      "99923100014",
      "25310499991",
      "12312312311",
    ];

    for (const p of valids) expect(validatePesel(p)).toBe(true);
  });

  test("should return false for invalid PESEL numbers", () => {
    const invalids = [
      "12345678901",
      "90080517453",
      "00810112345",
      "44051401A59",
      "1234567890",
      "02222912345",
      "20000230001",
      "99000000000",
    ];

    for (const p of invalids) expect(validatePesel(p)).toBe(false);
  });
});
