import { TrimArray, FormatNumber, GetFullName, GetAllPages, FormatPhoneNumber } from "./FormatHandlers";

describe("Factories Test", () => {
  it("TrimArray function test", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const res = [
      ['a', 'b'],
      ['c', 'd'],
      ['e']
    ];
    expect(TrimArray(arr, 2)).toStrictEqual(res);
  });

  it("FormatPhoneNumber function test", () => {
    const arr = 2348137964680;
    expect(FormatPhoneNumber(arr)).toBe("08137964680");
  });

  it("FormatNumber function test", () => {
    const arr = 123456789;
    expect(FormatNumber(arr)).toBe("123,456,789");
  });

  it("GetFullName function test", () => {
    const x = "John"; const y = "Lampard";
    expect(GetFullName(x, y)).toBe("John Lampard");
  });

  it("GetAllPages function test", () => {
    const x = 5; const y = 2;
    expect(GetAllPages(x, y)).toBe(3);
  });
});