export function unitBn(unit: string): string {
  return UNITS[unit] ?? unit;
}
const UNITS: Record<string, string> = {
  kg: "কেজি",
  liter: "লিটার",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন",
  hali: "হালি",
  gram: "গ্রাম",
};

export function toBn(value: number | string): string {
  const text = String(value);

  return text.replace(/[0-9]/g, (digit) => BN_DIGITS[Number(digit)]);
}
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
