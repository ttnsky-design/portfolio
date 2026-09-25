const NBSP = " ";

// Short words that must not be left hanging at the end of a line: any word of
// one or two letters (prepositions, conjunctions, particles), plus common
// three-letter prepositions and conjunctions.
const SHORT_WORD = "(?:[А-Яа-яЁёA-Za-z]{1,2}|для|при|без|про|под|над|или|как|что|чем)";

// The lookbehind reads the original string, so chains like "и в дом" bind in one pass.
const AFTER_SHORT_WORD = new RegExp(`(?<=^|[\\s(«"„])(${SHORT_WORD}) (?=\\S)`, "gi");
const BEFORE_DASH = / (?=[—–] )/g;
const BEFORE_PARTICLE = / (?=(?:бы|б|же|ж|ли)(?=[\s.,!?;:)»]|$))/g;
const AFTER_NUMBER = /(?<=\d) (?=[А-Яа-яЁёA-Za-z%₽])/g;
const AROUND_TIMES = / × /g;

/** Replaces spaces with non-breaking ones where a line break would leave a word hanging. */
export function typograph(text: string): string {
  return text
    .replace(AFTER_SHORT_WORD, `$1${NBSP}`)
    .replace(BEFORE_DASH, NBSP)
    .replace(BEFORE_PARTICLE, NBSP)
    .replace(AFTER_NUMBER, NBSP)
    .replace(AROUND_TIMES, `${NBSP}×${NBSP}`);
}
